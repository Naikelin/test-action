const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Obtener inputs
    const nameToGreet = core.getInput('who-to-greet');
    const customMessage = core.getInput('message');
    
    // Información del contexto
    const { repository, ref, sha } = github.context;
    const repoName = github.context.payload.repository?.full_name || 'unknown';
    
    // Crear el saludo
    const time = new Date().toTimeString();
    const greeting = `¡Hola ${nameToGreet}! 👋`;
    
    // Mostrar información
    console.log(`${greeting}`);
    console.log(`Ejecutándose en el repositorio: ${repoName}`);
    console.log(`Branch/Ref: ${ref}`);
    console.log(`Commit SHA: ${sha}`);
    
    if (customMessage) {
      console.log(`Mensaje personalizado: ${customMessage}`);
    }
    
    console.log(`Hora de ejecución: ${time}`);
    
    // Establecer outputs
    core.setOutput('time', time);
    core.setOutput('greeting', greeting);
    
    // Mensaje de éxito
    core.info('✅ Action ejecutada exitosamente!');
    
  } catch (error) {
    core.setFailed(`Error en la Action: ${error.message}`);
  }
}

run();
