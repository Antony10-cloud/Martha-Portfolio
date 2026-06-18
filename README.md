# Martha Portfolio

A custom one-page personal portfolio built by AM Digital Studio.

## Package scope

- 1 polished mobile-friendly page
- Project gallery section
- Contact details and social links
- Google Drive button for CV, certificates, or extra files
- Ready for one revision after real content is added

The current draft uses Martha as the working name and the WhatsApp number visible in the provided chat screenshot. Confirm the final phone number before publishing.

## Edit content

Open `script.js` and update the `PORTFOLIO` object:

- `name`
- `title`
- `role`
- `aboutText`
- `email`
- `phoneDisplay`
- `phoneHref`
- `whatsapp`
- `googleDriveUrl`
- `skills`
- `socials`
- `projects`

For real images, upload files into this repo, then set a project image like:

```js
image: "url('my-photo.jpg')"
```

## Deploy on Netlify

Recommended setup:

- Build command: leave empty
- Publish directory: `.`

Netlify can also read `netlify.toml`, which is already configured.
