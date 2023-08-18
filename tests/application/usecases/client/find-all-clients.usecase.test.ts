import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-clients.usecase"
import { ClientGateway } from "../../../../src/application/gateways/client/client.gateway"
import { Client } from "../../../../src/enterprise/entities/client/client.entity"

class ClientGatewayMock implements ClientGateway {
	async findAll(): Promise<Client[]> {
		return Promise.resolve([
			new Client("test", "test", "test@mail.com", "12345678912")
		])
	}
}

test("Deve retornar a lista de clientes", async () => {
	const clientGatewayMock = new ClientGatewayMock()
	const findAllClientsUseCase = new FindAllClientsUseCase(clientGatewayMock)
	
	const expectedClients = [
		new Client("test", "test", "test@mail.com", "12345678912")
	]
	const actualClients = await findAllClientsUseCase.execute()

	expect(actualClients).toEqual(expectedClients)
})