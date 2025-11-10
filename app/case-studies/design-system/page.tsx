import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component Design System - Case Study | Jerry Duran",
  description: "Comprehensive design system and component library for scalable frontend development.",
};

export default function DesignSystemCaseStudy() {
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
            Component Design System
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Comprehensive design system and component library
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Storybook", "TypeScript", "Styled Components", "Jest", "Figma"].map((tag) => (
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
            src="/designsystem-preview.png"
            alt="Component Design System showing UI components, color palette, typography, and design documentation"
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
              A comprehensive design system and component library created to standardize UI/UX across
              multiple products and teams. The system provides a unified foundation for design and
              development, ensuring consistency, accessibility, and scalability.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Built to serve both designers and developers, the system bridges the gap between design
              and implementation with detailed documentation, interactive examples, and automated testing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              System Components
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Foundation</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Typography scale and font pairings</li>
                  <li>• Color palette with semantic tokens</li>
                  <li>• Spacing and layout grid systems</li>
                  <li>• Icon library with consistent style</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Components</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• 50+ reusable UI components</li>
                  <li>• Form elements and validation</li>
                  <li>• Navigation and layout components</li>
                  <li>• Data display and feedback components</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Technical Implementation
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• TypeScript for type safety and developer experience</li>
              <li>• Styled Components for theme-based styling</li>
              <li>• Storybook for component documentation and testing</li>
              <li>• Jest and React Testing Library for unit tests</li>
              <li>• Automated visual regression testing</li>
              <li>• NPM package distribution for easy integration</li>
              <li>• Figma integration with design tokens</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Development Process
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              The design system was developed through close collaboration between design and engineering
              teams. Each component went through multiple iterations, with feedback from actual product
              implementations driving refinements and improvements.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Documentation was prioritized from day one, with interactive Storybook stories that serve
              as both examples and testing environments. This approach ensures components remain reliable
              and easy to implement across different projects.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Impact & Adoption
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">8</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Product Teams</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">70%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Faster Development</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">100%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Accessibility Compliance</div>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              The design system has been successfully adopted across multiple product teams, significantly
              reducing development time while improving consistency and accessibility. The system continues
              to evolve based on team feedback and product requirements.
            </p>
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