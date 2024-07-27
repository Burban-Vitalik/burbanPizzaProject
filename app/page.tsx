import { Container, Title, TopBar } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductsListGroup } from "@/components/shared/products-list-group";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsListGroup
                listClassName={""}
                categoryId={1}
                items={[
                  {
                    id: "1",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "2",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "3",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "4",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "5",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                ]}
                title={"Pizzas"}
              />
              <ProductsListGroup
                listClassName={""}
                categoryId={2}
                items={[
                  {
                    id: "6",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "7",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "8",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "9",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "10",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                ]}
                title={"Combo"}
              />
              <ProductsListGroup
                listClassName={""}
                categoryId={3}
                items={[
                  {
                    id: "6",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "7",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "8",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "9",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                  {
                    id: "10",
                    name: "Diabolla",
                    imageUrl:
                      "https://la.ua/wp-content/uploads/2022/04/dzhavelinajavelina-1.webp",
                    price: 330,
                    items: [{ price: 330 }],
                  },
                ]}
                title={"zakuski"}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
