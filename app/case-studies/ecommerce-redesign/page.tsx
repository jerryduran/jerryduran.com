import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Redesign - Case Study | Jerry Duran",
  description: "Modern redesign of online retail platform with improved user experience and conversion optimization.",
};

export default function EcommerceRedesignCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white">
            E-commerce Redesign
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Modern redesign of online retail platform with improved UX
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Figma", "React", "SCSS", "Mobile-First", "A/B Testing"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mb-12 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
            src="/ecommerce-preview.png"
            alt="E-commerce website redesign showing modern product catalog, shopping cart, and improved user experience"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Complete redesign of an established e-commerce platform serving over 100,000 customers.
              The project aimed to modernize the user experience, improve conversion rates, and create
              a more intuitive shopping journey across all devices.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Through extensive user research and data analysis, we identified key pain points in the
              existing design and developed solutions that significantly improved user engagement and sales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Design Process
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Research & Analysis</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• User interviews and surveys</li>
                  <li>• Competitive analysis</li>
                  <li>• Analytics review and heatmap analysis</li>
                  <li>• Accessibility audit</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Design & Testing</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Wireframing and prototyping</li>
                  <li>• A/B testing implementation</li>
                  <li>• Mobile-first responsive design</li>
                  <li>• Usability testing sessions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Improvements
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Streamlined checkout process reducing steps by 40%</li>
              <li>• Enhanced product discovery with improved search and filters</li>
              <li>• Mobile-optimized design increasing mobile conversions</li>
              <li>• Improved product page layout with better imagery</li>
              <li>• Faster loading times through performance optimization</li>
              <li>• Better accessibility compliance (WCAG 2.1 AA)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">35%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Conversion Increase</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">60%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Mobile Traffic Growth</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">-25%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Cart Abandonment</div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            View More Projects
          </Link>
        </div>
      </main>
    </div>
  );
}