# Sanity CMS Studio Schemas

This document provides all the Sanity Studio schema definitions needed to power the Barilla Holiday Park website. Copy these into your Sanity Studio project.

## Setup

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Install Sanity Studio: `npm create sanity@latest`
3. Copy the schemas below into your Studio's `schemaTypes/` folder
4. Add your Project ID to the website's environment: `VITE_SANITY_PROJECT_ID=your_project_id`
5. Optionally set `VITE_SANITY_DATASET=production` (defaults to "production")

---

## Schema: Site Settings (`siteSettings.ts`)

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'freeCallPhone', title: 'Freecall Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href', title: 'Link', type: 'string' }),
          defineField({
            name: 'children',
            title: 'Dropdown Items',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'href', title: 'Link', type: 'string' }),
              ]
            }]
          })
        ]
      }]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'platform', title: 'Platform', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'url' }),
        ]
      }]
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ]
    }),
  ],
})
```

---

## Schema: Home Page (`homePage.ts`)

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image' }),
        defineField({
          name: 'ctaButtons',
          title: 'CTA Buttons',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Button Text', type: 'string' }),
              defineField({ name: 'href', title: 'Link', type: 'string' }),
              defineField({
                name: 'variant',
                title: 'Style',
                type: 'string',
                options: { list: ['primary', 'success'] }
              }),
            ]
          }]
        }),
      ]
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
        defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] }),
      ]
    }),
    defineField({
      name: 'accommodationSection',
      title: 'Accommodation Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
              defineField({ name: 'image', title: 'Image', type: 'image' }),
              defineField({ name: 'link', title: 'Link', type: 'string' }),
              defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
            ]
          }]
        }),
      ]
    }),
    defineField({
      name: 'infoSection',
      title: 'Info Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'contactCard',
          title: 'Contact Card',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'address', title: 'Address', type: 'string' }),
            defineField({ name: 'phone', title: 'Phone', type: 'string' }),
            defineField({ name: 'mapLink', title: 'Map Link', type: 'url' }),
          ]
        }),
        defineField({
          name: 'ratingsCard',
          title: 'Ratings Card',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'tripadvisorLink', title: 'TripAdvisor Link', type: 'url' }),
            defineField({ name: 'rating', title: 'Rating', type: 'number' }),
            defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
          ]
        }),
        defineField({
          name: 'socialCard',
          title: 'Social Card',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'facebookLink', title: 'Facebook Link', type: 'url' }),
          ]
        }),
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', description: 'Under 60 characters' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text', description: 'Under 160 characters' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ]
    }),
  ],
})
```

---

## Schema: Accommodation Page (`accommodationPage.ts`)

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'accommodationPage',
  title: 'Accommodation Pages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string' }),
    defineField({ name: 'sectionDescription', title: 'Section Description', type: 'text' }),
    defineField({
      name: 'items',
      title: 'Accommodation Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Name', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
          defineField({ name: 'sleeps', title: 'Sleeps', type: 'string' }),
          defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
          defineField({ name: 'image', title: 'Image', type: 'image' }),
          defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
          defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
        ]
      }]
    }),
    defineField({ name: 'amenitiesHeading', title: 'Amenities Heading', type: 'string' }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Lucide icon name: Bed, Wifi, Tv, Car, Sun, Zap, ShowerHead, Trees, Tent, Flame, UtensilsCrossed'
          }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
        ]
      }]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ]
    }),
  ],
  preview: {
    select: { title: 'title' }
  }
})
```

---

## Schema: Activity Page (`activityPage.ts`)

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'activityPage',
  title: 'Activity Pages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string' }),
    defineField({ name: 'sectionDescription', title: 'Section Description', type: 'text' }),
    defineField({
      name: 'activities',
      title: 'Activities / Attractions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon', type: 'string', description: 'Lucide icon name' }),
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
          defineField({ name: 'distance', title: 'Distance (optional)', type: 'string' }),
        ]
      }]
    }),
    defineField({
      name: 'featureSection',
      title: 'Feature Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'secondaryDescription', title: 'Secondary Description', type: 'text' }),
        defineField({ name: 'image', title: 'Image', type: 'image' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
      ]
    }),
    defineField({
      name: 'infoCards',
      title: 'Info Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon', type: 'string' }),
          defineField({ name: 'heading', title: 'Heading', type: 'string' }),
          defineField({ name: 'content', title: 'Content', type: 'text' }),
        ]
      }]
    }),
    defineField({ name: 'bodyText', title: 'Body Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Button Text', type: 'string' }),
        defineField({ name: 'href', title: 'Link', type: 'string' }),
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ]
    }),
  ],
  preview: {
    select: { title: 'title' }
  }
})
```

---

## Schema: Contact Page (`contactPage.ts`)

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'contactHeading', title: 'Contact Heading', type: 'string' }),
    defineField({ name: 'contactDescription', title: 'Contact Description', type: 'text' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'receptionHours', title: 'Reception Hours', type: 'text' }),
    defineField({ name: 'mapLink', title: 'Google Maps Link', type: 'url' }),
    defineField({ name: 'formHeading', title: 'Form Heading', type: 'string' }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ]
    }),
  ],
})
```

---

## Schema: Tourist Attractions Page (`touristAttractionsPage.ts`)

Singleton document powering `/things-to-do/attractions` with a filterable list of attractions.

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'touristAttractionsPage',
  title: 'Tourist Attractions Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string' }),
    defineField({
      name: 'introParagraphs',
      title: 'Introduction Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Categories shown as filter pills, e.g. "Markets & Shopping", "Heritage & History"',
    }),
    defineField({
      name: 'attractions',
      title: 'Attractions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Name', type: 'string' }),
          defineField({ name: 'image', title: 'Image', type: 'image' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
          defineField({ name: 'address', title: 'Address', type: 'string' }),
          defineField({ name: 'phone', title: 'Phone', type: 'string' }),
          defineField({ name: 'website', title: 'Website URL', type: 'url' }),
          defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Must match values from the page-level categories list',
          }),
        ],
      }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ],
    }),
  ],
})
```

---

## Schema: Day Trips Page (`dayTripsPage.ts`)

Singleton document powering `/things-to-do/day-trips` with curated multi-stop itineraries.

```ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'dayTripsPage',
  title: 'Day Trips Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string' }),
    defineField({
      name: 'introParagraphs',
      title: 'Introduction Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'trips',
      title: 'Day Trips',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Trip Title', type: 'string' }),
          defineField({ name: 'image', title: 'Image', type: 'image' }),
          defineField({ name: 'description', title: 'Short Description', type: 'text' }),
          defineField({ name: 'bestFor', title: 'Best For', type: 'string', description: 'Shown in the pill on the image, e.g. "Families, low-intensity nature"' }),
          defineField({
            name: 'stops',
            title: 'Stops Breakdown',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Ordered list of stops on the itinerary',
          }),
          defineField({ name: 'mapsUrl', title: 'Google Maps URL', type: 'url' }),
        ],
      }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'string' }),
      ],
    }),
  ],
})
```

---

## Schema Index (`index.ts`)

```ts
import siteSettings from './siteSettings'
import homePage from './homePage'
import accommodationPage from './accommodationPage'
import activityPage from './activityPage'
import contactPage from './contactPage'
import touristAttractionsPage from './touristAttractionsPage'
import dayTripsPage from './dayTripsPage'

export const schemaTypes = [
  siteSettings,
  homePage,
  accommodationPage,
  activityPage,
  contactPage,
  touristAttractionsPage,
  dayTripsPage,
]
```

---

## Content Setup Checklist

After setting up Sanity Studio with these schemas:

1. **Site Settings** — Create one document with your business details, nav menu, and default SEO
2. **Home Page** — Create one document with hero, introduction, accommodation cards, and info section
3. **Accommodation Pages** — Create 4 documents with slugs: `cabins`, `caravans`, `camping`, `airport`
4. **Activity Pages** — Create 2 documents with slugs: `at-barilla`, `mini-golf`
5. **Tourist Attractions Page** — Create one document with categories and attractions list
6. **Day Trips Page** — Create one document with curated itineraries
7. **Contact Page** — Create one document with contact details and form heading

All fields are optional — the website falls back to static content for any missing fields.
