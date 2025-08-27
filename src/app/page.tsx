import ProductGrid from '@/components/ProductGrid'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nike Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest Nike sneakers and athletic wear. From classic Air Force 1s to cutting-edge running shoes, find your perfect pair.
        </p>
      </div>
      
      <ProductGrid />
    </div>
  )
}