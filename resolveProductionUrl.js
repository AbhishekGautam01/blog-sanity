export default function resolveProductionUrl(document) {
  const projectURL = process.env.SANITY_STUDIO_PROJECT_URL;
  const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
  return `${projectURL}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
