## Problem

The `.asset.json` pointer for `hero-drone.mp4` references a **relative URL**:
`/__l5e/assets-v1/2aa3fb3f-.../hero-drone.mp4`

This path is served by Lovable's hosting infrastructure (Cloudflare-backed, on `*.lovable.app`). It works on the Lovable preview/published site, but on Vercel the same relative path resolves against your Vercel domain — which has no handler for `/__l5e/*`, so it returns 404.

I verified the asset is healthy on the Lovable CDN:
- `HTTP/2 200`, `content-type: video/mp4`, `content-length: 53,687,665`, `access-control-allow-origin: *`, immutable cache.

## Fix: add a Vercel rewrite to proxy `/__l5e/*` to the Lovable CDN

Add a `vercel.json` at the project root that rewrites the Lovable asset path to the preview/published Lovable host. This keeps the existing code (`hero-drone.mp4.asset.json` and any other CDN-hosted asset pointers) working unchanged on Vercel.

```json
{
  "rewrites": [
    {
      "source": "/__l5e/:path*",
      "destination": "https://id-preview--a658202f-b6b7-423c-91b3-acf37368d476.lovable.app/__l5e/:path*"
    }
  ]
}
```

This fixes **all** Lovable CDN assets at once (not just hero-drone.mp4), so any future `.asset.json` files will work on Vercel automatically.

### Notes / trade-offs

- The rewrite targets the Lovable preview domain. If you'd rather point at the published `*.lovable.app` domain, publish the project first and I'll swap the URL.
- Vercel proxies the response, so the video still benefits from Cloudflare caching upstream. Range requests (needed for video seeking) pass through.
- Alternative if you don't want to depend on Lovable hosting from Vercel: re-host `hero-drone.mp4` on a dedicated video host (Cloudflare R2 public bucket, Mux, Bunny, Cloudinary) and update `src/assets/hero-drone.mp4.asset.json`'s `url` to an absolute URL. Happy to do that instead — just need a destination.

## Files to change

- **Create** `vercel.json` with the rewrite block above.

Nothing else needs editing. The build output and `Hero.tsx` already consume `heroAsset.url`, which will hit the proxied path on Vercel.
