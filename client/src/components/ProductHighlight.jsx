import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard"

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Product Card 1 */}
          <ProductCard
          ProductImage = "https://picsum.photos/id/231/200/200" 
          ProductName = "Mountain Photo"
          ProductPrice = "$89.99" />
          {/* Product Card 2 */}
          <ProductCard
          ProductImage = "https://picsum.photos/id/232/200/200" 
          ProductName = "Night Photo"
          ProductPrice = "$49.99" />
          {/* Product Card 3 */}
          <ProductCard
          ProductImage = "https://picsum.photos/200/200" 
          ProductName = "City Photo"
          ProductPrice = "$59.99" />
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
