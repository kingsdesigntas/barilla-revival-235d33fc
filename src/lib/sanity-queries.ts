// GROQ queries for all Sanity content types

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  phone,
  freeCallPhone,
  email,
  address,
  "navigationItems": navigationItems[]{
    label,
    href,
    children[]{
      label,
      href
    }
  },
  footerColumns[]{
    title,
    links[]{
      label,
      href,
      external
    }
  },
  socialLinks[]{
    platform,
    url
  },
  seo{
    title,
    description,
    keywords
  }
}`;

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  hero{
    heading,
    subheading,
    "backgroundImage": backgroundImage.asset->url,
    ctaButtons[]{
      label,
      href,
      variant
    }
  },
  introduction{
    heading,
    subheading,
    paragraphs
  },
  accommodationSection{
    heading,
    description,
    cards[]{
      title,
      description,
      "image": image.asset->url,
      link,
      buttonText
    }
  },
  infoSection{
    heading,
    description,
    contactCard{
      heading,
      address,
      phone,
      mapLink
    },
    ratingsCard{
      heading,
      description,
      tripadvisorLink,
      rating,
      reviewCount
    },
    socialCard{
      heading,
      description,
      facebookLink
    }
  },
  seo{
    title,
    description,
    keywords
  }
}`;

export const ACCOMMODATION_PAGE_QUERY = `*[_type == "accommodationPage" && slug.current == $slug][0]{
  title,
  subtitle,
  "heroImage": heroImage.asset->url,
  sectionHeading,
  sectionDescription,
  items[]{
    name,
    description,
    sleeps,
    features,
    "image": image.asset->url,
    buttonText,
    buttonLink
  },
  amenities[]{
    icon,
    label
  },
  amenitiesHeading,
  seo{
    title,
    description,
    keywords
  }
}`;

export const ACTIVITY_PAGE_QUERY = `*[_type == "activityPage" && slug.current == $slug][0]{
  title,
  subtitle,
  "heroImage": heroImage.asset->url,
  sectionHeading,
  sectionDescription,
  activities[]{
    icon,
    title,
    description,
    distance
  },
  featureSection{
    heading,
    description,
    "image": image.asset->url,
    buttonText,
    buttonLink
  },
  infoCards[]{
    icon,
    heading,
    content
  },
  bodyText,
  ctaButton{
    label,
    href
  },
  seo{
    title,
    description,
    keywords
  }
}`;

export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  title,
  subtitle,
  "heroImage": heroImage.asset->url,
  contactHeading,
  contactDescription,
  phone,
  email,
  address,
  receptionHours,
  mapLink,
  formHeading,
  seo{
    title,
    description,
    keywords
  }
}`;
