import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Dashboard - Case Study | Jerry Duran",
  description: "Real-time data visualization dashboard for business intelligence featuring interactive charts and responsive design.",
};

export default function AnalyticsDashboardCaseStudy() {
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
            Analytics Dashboard
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Real-time data visualization dashboard for business intelligence
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "D3.js", "Chart.js", "Tailwind CSS", "WebSocket"].map((tag) => (
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
            src="/dashboard-preview.png"
            alt="Analytics Dashboard showing real-time business intelligence metrics, revenue trends chart, and user distribution data visualization"
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
              A comprehensive analytics dashboard built for enterprise clients to visualize complex data sets
              in real-time. The project focused on creating intuitive data visualizations that help business
              stakeholders make informed decisions quickly and efficiently.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              The challenge was to present large amounts of data in a digestible format while maintaining
              excellent performance and user experience across different devices and screen sizes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>• Interactive charts and graphs with D3.js</li>
              <li>• Real-time data updates via WebSocket connections</li>
              <li>• Customizable dashboard widgets and layouts</li>
              <li>• Advanced filtering and data drill-down capabilities</li>
              <li>• Export functionality for reports and presentations</li>
              <li>• Responsive design optimized for mobile and desktop</li>
              <li>• Role-based access control and user permissions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Technical Implementation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Frontend</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• React 18 with functional components</li>
                  <li>• D3.js for custom data visualizations</li>
                  <li>• Chart.js for standard chart types</li>
                  <li>• Tailwind CSS for responsive styling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black dark:text-white mb-2">Performance</h3>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-sm">
                  <li>• Virtualized lists for large datasets</li>
                  <li>• Memoization for expensive calculations</li>
                  <li>• WebSocket for real-time updates</li>
                  <li>• Lazy loading for dashboard widgets</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Results & Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">50%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Faster Data Analysis</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">Real-time</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Data Updates</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                <div className="text-2xl font-bold text-black dark:text-white mb-2">Interactive</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Visualizations</div>
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