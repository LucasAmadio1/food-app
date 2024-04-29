import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

import { 
  useFonts,
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold, 
  Inter_700Bold, 
} from '@expo-google-fonts/inter'

import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold,
  })

  if (!fontLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  )
}