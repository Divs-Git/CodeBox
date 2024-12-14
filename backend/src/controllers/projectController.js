import util from 'util'
import child_process from 'child_process'
import fs from 'fs/promises'
import uuid4 from 'uuid4'

const execPromisified = util.promisify(child_process.exec)

export const createProjectController = async (req, res) => {
  //   const { stdout, stderr } = await execPromisified('ls')
  //   console.log('stdout:', stdout)
  //   console.error('stderr:', stderr)

  // Create a unique id and then inside the projects folder create a new folder with that id
  const projectId = uuid4()
  console.log('New project id is', projectId)

  await fs.mkdir(`./projects/${projectId}`)

  // After this call the npm create vite command in newly created project folder
  const response = await execPromisified(
    'npm create vite@latest codebox -- --template react',
    {
      cwd: `./projects/${projectId}`,
    }
  )

  return res.json({ message: 'Project Created', data: projectId })
}
