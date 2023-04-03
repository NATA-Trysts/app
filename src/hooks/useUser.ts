import { useUserStore } from '@/stores'

export const useUser = () => {
  const userStore = useUserStore((state) => state)

  return { ...userStore }
}
