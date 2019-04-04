import { WebClient } from '@slack/web-api'
import chrono from 'chrono-node'

const userEric = 'UANJ8LMLL'

const web = new WebClient(process.env.REACT_APP_SLACK_TOKEN);

export async function createReminder(str) {
  const results = chrono.parse(str)
  if (results.length !== 1) {
    console.log('Did not find exactly 1 result.')
    console.log(results)
    return
  }

  const time = results[0].text;
  const text = str.replace(time, '').replace(/\s\s+/g, ' ').trim()
  
  if (!text) {
    console.log('No message text.')
    return
  }

  const result = await web.reminders.add({
    user: userEric,
    time,
    text,
  })

  console.log(result)
}
