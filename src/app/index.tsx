import { View, FlatList } from 'react-native'
import { useState } from 'react'
import { CATEGORIES } from '@/utils/data/products'

import { CategoryButton } from '@/components/Category-button'
import { Header } from '@/components/Header'

export default function Home() {
  const [category, setCategory] = useState([CATEGORIES[0]])

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header 
        title="faça seu pedido"
        cartQuatityItems={20}
      />

      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelected(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap:12, paddingHorizontal: 20 }}
      />
    </View>
  )
}