import { Container, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variant";
import { ProductImage } from "@/components/shared/product-image";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">it text for pizza card</p>
          <GroupVariants
            selectedValue="1"
            items={[
              { value: "1", name: "Small" },
              { value: "2", name: "Medium" },
              { value: "3", name: "Large", disabled: true },
            ]}
            // onClick={(}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
