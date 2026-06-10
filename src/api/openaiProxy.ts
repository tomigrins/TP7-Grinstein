export async function sendToProxy(messages: any[], model = 'gpt-3.5-turbo') {
  const resp = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, model }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(text || 'Proxy request failed');
  }
  return resp.json();
}
