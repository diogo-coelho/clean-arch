import { Client } from "../../../../src/enterprise/entities/client/client.entity"

test("Deve retornar o nome como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678')
	expect(client.fistName).toBe('test')
})

test("Deve retornar o sobrenome como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678')
	expect(client.lastName).toBe('test')
})

test("Deve retornar o email como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678')
	expect(client.email).toBe('test@test.com')
})

test("Deve retornar o cpf como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678')
	expect(client.cpf).toBe('12345678')
})
