import { Outlet } from "react-router-dom";
import { Card, Container, Stack } from "@mantine/core";

const Layout = () => {
	return (
		<Card withBorder radius="lg" p="xs" sx={() => ({ minWidth: 380, maxWidth: 380 })}>
			<Container size={358} p="xs">
				<Stack
					align="center"
					justify="space-around"
					spacing="xl"
					sx={() => ({ height: 700, overflow: "auto" })}
				>
					<Outlet />
				</Stack>
			</Container>
		</Card>
	);
};

export default Layout;
