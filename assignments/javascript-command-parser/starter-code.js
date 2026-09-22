const VALID_COMMANDS = ["/assign", "/review"];

function getCommandParts(input) {
  return input.trim().split(/\s+/);
}

function parseArguments(parts) {
  const args = {};

  for (const part of parts) {
    // TODO: valide se o argumento esta no formato chave=valor.
    // TODO: adicione a chave e o valor ao objeto args.
  }

  return args;
}

function parseCommand(input) {
  const parts = getCommandParts(input);
  const command = parts[0];

  // TODO: verifique se o comando informado e valido.
  const argumentsObject = parseArguments(parts.slice(1));

  return {
    command,
    arguments: argumentsObject,
  };
}

function buildSummary(parsedCommand) {
  const entries = Object.entries(parsedCommand.arguments);

  if (entries.length === 0) {
    return `Command: ${parsedCommand.command}`;
  }

  const details = entries
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");

  return `Command: ${parsedCommand.command} | ${details}`;
}

const input = "   /assign   topic=javascript   duration=30   ";
const parsedCommand = parseCommand(input);

console.log(parsedCommand);
console.log(buildSummary(parsedCommand));

