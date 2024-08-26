import { Container, Title, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductsListGroup } from "@/components/shared/products-list-group";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: { ingridients: true, items: true },
      },
    },
  });

  console.log("categories", categories[0]);
  return (
    <>
      <Container>
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsListGroup
                      key={category.id}
                      listClassName={""}
                      categoryId={category.id}
                      items={category.products}
                      title={category.name}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
