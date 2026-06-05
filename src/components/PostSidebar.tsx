import AuthorCardSidebar from "./AuthorCardSidebar";
import TableOfContents from "./TableOfContents";
import type { TocItem } from "./TableOfContents";
import RecentPosts from "./RecentPosts";
import NewsletterMini from "./NewsletterMini";
import AiGlossary from "./AiGlossary";

export default function PostSidebar({
  locale,
  tocItems,
}: {
  locale: string;
  tocItems: TocItem[];
}) {
  return (
    <aside className="flex flex-col gap-6">
      <AuthorCardSidebar locale={locale} />
      <TableOfContents items={tocItems} locale={locale} />
      <RecentPosts locale={locale} />
      <NewsletterMini locale={locale} />
      <AiGlossary locale={locale} />
    </aside>
  );
}
