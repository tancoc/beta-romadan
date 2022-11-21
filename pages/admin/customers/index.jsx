import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import api from 'instance'
import { Avatar, Container, Flex, IconButton, Td, Text, Tr } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import Card from 'components/_card'
import Table from 'components/_table'

const Customers = () => {
	const router = useRouter()
	const { data: users, isFetched: isUsersFetched } = useQuery(['users'], () => api.all('/users'))

	return (
		<Container>
			<Card>
				<Table
					data={users}
					fetched={isUsersFetched}
					th={['Full Name', 'Email', 'Joined', '']}
					td={(user) => (
						<Tr key={user._id}>
							<Td maxW={200}>
								<Flex align="center" gap={3}>
									<Avatar name={user.name} src={user.image} />

									<Text overflow="hidden" textOverflow="ellipsis">
										{user.name}
									</Text>
								</Flex>
							</Td>

							<Td>
								<Text>{user.email}</Text>
							</Td>

							<Td>
								<Text>{user.created}</Text>
							</Td>

							<Td textAlign="right">
								<IconButton size="xs" icon={<FiMoreHorizontal size={12} />} />
							</Td>
						</Tr>
					)}
					filters={(data) => {
						return data.filter((data) => data.role === 'Customer')
					}}
					settings={{
						placeholder: 'Search Customers'
					}}
				/>
			</Card>
		</Container>
	)
}

export default Customers
