# 📘 Tarefa: Building REST APIs with FastAPI

## 🎯 Objetivo

Os alunos irão construir uma API REST simples usando o framework FastAPI. A atividade explora a criação de endpoints, o uso de modelos de dados, validação de entradas e operações CRUD em uma API de gerenciamento de tarefas.

## 📝 Tarefas

### 🛠️ Configuração inicial da API

#### Descrição

Crie uma aplicação FastAPI básica com um endpoint inicial e uma rota para listar tarefas.

#### Requisitos
O programa concluído deve:

- Instalar `fastapi` e `uvicorn` em um ambiente Python.
- Criar uma instância de `FastAPI`.
- Implementar uma rota `GET /` que retorne uma mensagem de boas-vindas.
- Implementar uma rota `GET /tasks` que devolva uma lista de tarefas em JSON.
- Rodar a API localmente com `uvicorn app:app --reload`.

### 🛠️ CRUD de tarefas

#### Descrição

Expandir a API para permitir criar, consultar, atualizar e remover tarefas.

#### Requisitos
O programa concluído deve:

- Implementar `POST /tasks` para criar uma nova tarefa.
- Implementar `GET /tasks/{task_id}` para retornar uma tarefa específica.
- Implementar `PUT /tasks/{task_id}` para atualizar uma tarefa existente.
- Implementar `DELETE /tasks/{task_id}` para remover uma tarefa.
- Manter os dados em memória usando uma lista ou dicionário.
- Retornar `404 Not Found` quando a tarefa não existir.
- Usar JSON com campos como `id`, `title`, `description` e `completed`.

### 🛠️ Validação e documentação automática

#### Descrição

Adicionar modelos de entrada e saída para melhorar a validação e a documentação da API.

#### Requisitos
O programa concluído deve:

- Definir modelos `Task` e `TaskCreate` com `pydantic`.
- Validar campos obrigatórios e garantir que `title` não seja vazio.
- Usar `response_model` para padronizar respostas da API.
- Retornar `201 Created` ao criar uma nova tarefa.
- Aproveitar a documentação interativa do FastAPI em `/docs`.
- Testar os endpoints com Swagger UI ou um cliente HTTP.

