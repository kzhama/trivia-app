import { Outlet } from "react-router-dom";
import { Card, Container, Stack } from "@mantine/core";

const Layout = () => {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Container size={300}>
				<Stack
					align="center"
					justify="space-around"
					spacing="xl"
					sx={(theme) => ({
						height: 600,
					})}
				>
					<Outlet />
				</Stack>
			</Container>
		</Card>
	);
};

export default Layout;
