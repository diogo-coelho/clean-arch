import { Client } from "../../../../src/enterprise/entities/client/client.entity"

test("Deve retornar o nome como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678912')
	expect(client.fistName).toBe('test')
})

test("Deve retornar o sobrenome como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678912')
	expect(client.lastName).toBe('test')
})

test("Deve retornar o email como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678912')
	expect(client.email).toBe('test@test.com')
})

test("Deve retornar o cpf como uma string", () => {
	const client = new Client('test', 'test', 'test@test.com', '12345678912')
	expect(client.cpf).toBe('12345678912')
})

test("Deve lançar um erro quando nome com menos que 3 caracteres", () => {
	const exec = () => new Client("a", "test", "test@mail.com", "12345678912")
	expect(exec).toThrow(Error)
})

test("Deve lançar um erro quando sobrenome tem menos que 3 caracteres", () => {
	const exec = () => new Client("test", "a", "test@mail.com", "12345678912")
	expect(exec).toThrow(Error)
})