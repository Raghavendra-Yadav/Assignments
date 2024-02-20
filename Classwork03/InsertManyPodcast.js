db.podcasts.insertMany([
    {
      _id: ObjectId("6261a92dfee1ff300dc80bf2"),
      title: "Data Science Bytes",
      platforms: ["Apple Podcasts", "Google Podcasts", "Spotify"],
      year: 2023,
      hosts: ["Alice Smith", "Bob Johnson"],
      premium_subs: 3200,
      downloads: 5000,
      podcast_type: "audio",
    },
    {
      _id: ObjectId("6261a92dfee1ff300dc80bf3"),
      title: "Tech Talk with Experts",
      platforms: ["Apple Podcasts", "Google Podcasts"],
      year: 2024,
      hosts: ["Charlie Brown"],
      premium_subs: 1000,
      downloads: 3000,
      podcast_type: "audio",
    },
    {
      _id: ObjectId("6261a92dfee1ff300dc80bf4"),
      title: "The Startup Journey",
      platforms: ["Apple Podcasts", "Spotify"],
      year: 2022,
      hosts: ["David Williams", "Emma Thompson"],
      premium_subs: 6000,
      downloads: 8000,
      podcast_type: "audio",
    }
  ]);
  