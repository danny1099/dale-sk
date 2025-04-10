import { getTranslations } from "next-intl/server";
import { Title, Text } from "@/modules/common/components";

export default async function Home() {
  const t = await getTranslations("init");

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <Title>{t("title")}</Title>
      <Text>{t("description")}</Text>
    </section>
  );
}
