import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useProfile() {
	const { data, isLoading, isSuccess, refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})

	return { data, isLoading, isSuccess, refetch }
}
