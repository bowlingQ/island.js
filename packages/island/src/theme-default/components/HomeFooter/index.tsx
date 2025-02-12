import { usePageData } from '@client';

export function Footer() {
  const { siteData } = usePageData();
  const { message, copyright } = siteData.themeConfig.footer || {};
  return (
    <footer
      p="y-8 x-6 sm:8"
      bg="bg-default"
      relative=""
      border="t-1 b-0 solid divider-light"
    >
      <div m="auto" w="100%" text="center">
        {message && (
          <div font="medium" text="sm text-2">
            {message}
          </div>
        )}
        {copyright && (
          <div font="medium" text="sm text-2">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
