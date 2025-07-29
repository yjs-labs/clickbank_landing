import React from "react";
import Image from "next/image";


export default function GoutTemplatePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* Header with background image */}
        <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 flex items-center justify-center">
          <Image
            src="/dad-gout.jpg"
            alt="Header background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-4">My dad, 62, suffered from gout for 10 years — then I found a fix</h2>
            <div className="bg-yellow-100 bg-opacity-90 rounded-md p-3 text-yellow-900 font-medium inline-block">
              A simple diet guide helped him avoid flare-ups for the last 6 months.
            </div>
          </div>
        </div>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Swelling so bad he could barely walk</li>
          <li>Flare-ups even after cutting out meat</li>
          <li>Medications with side effects</li>
        </ul>
        <p className="mb-4 text-gray-600">I searched medical journals, diet guides, and forums for ways to help relieve my dad&apos;s gout. I found a natural method and structured all the research into an easy-to-follow guide. It helps my dad and it might help you as well.</p>
        <div className="mb-6">
          <blockquote className="italic text-gray-500 mb-1">&quot;I got the best results!&quot;</blockquote>
          <span className="text-xs text-gray-400 block mb-2">— A. Smith</span>
          <blockquote className="italic text-gray-500 mb-1">&quot;I recommend this guide.&quot;</blockquote>
          <span className="text-xs text-gray-400 block">— R. Lee</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-semibold mb-8">Learn more authors</button>

        <h2 className="text-2xl font-bold mb-4">Your doctor never told you <span className="underline">THIS</span> makes gout worse</h2>
        <p className="mb-4 text-gray-700">There&apos;s a good chance you&apos;ve been misled with ineffective advice.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="bg-yellow-50 p-3 rounded flex-1">
            <h3 className="font-semibold mb-2">Common Advice</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Drink lots of water</li>
              <li>Cut out alcohol</li>
              <li>Cut out red meat</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-3 rounded flex-1">
            <h3 className="font-semibold mb-2">Better Advice</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Balance your meals</li>
              <li>Cut back on sugar</li>
              <li>Cut out these 3 foods</li>
            </ul>
          </div>
        </div>
        <p className="mb-4 text-gray-600">I researched every diet and every study until I finally found a plan that actually helps.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-semibold mb-8">Get the gout diet plan</button>
        <p className="text-xs text-gray-400 mb-8">This is a digital book, with diet instructions, food list, recipes</p>

        <h2 className="text-2xl font-bold mb-4">Retired nutritionist’s notes on beating gout naturally</h2>
        <div className="flex flex-col sm:flex-row items-center mb-4">
          <div className="bg-gray-100 rounded p-4 mr-4 flex-shrink-0 mb-2 sm:mb-0">
            <span className="block font-bold text-lg text-blue-700">BEAT GOUT WITH DIET</span>
          </div>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Adjust your diet to lower uric acid</li>
            <li>12 recipes & tips to beat flare-ups</li>
            <li>Daily habits for minimizing swelling</li>
          </ul>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-semibold mb-2">Get the gout now~~</button>
        <p className="text-xs text-gray-400 mb-4">This is a digital book. With title instructions, food fast recipes</p>
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">FAQ</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li><strong>Is this a medical treatment?</strong> No, this is nutritional advice only.</li>
            <li><strong>How soon can I see results?</strong> Many see improvement after a few weeks.</li>
            <li><strong>Is there a guarantee?</strong> Results may vary, but most users see benefits.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
