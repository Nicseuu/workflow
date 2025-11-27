{
  "nodes": [
    {
      "id": "1",
      "name": "Manual Trigger",
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [200, 200],
      "parameters": {}
    },
    {
      "id": "2",
      "name": "Daily Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1,
      "position": [200, 400],
      "parameters": {
        "mode": "everyDay",
        "hour": 10,
        "minute": 0
      }
    },
    {
      "id": "3",
      "name": "Combine Triggers",
      "type": "n8n-nodes-base.merge",
      "typeVersion": 1,
      "position": [450, 300],
      "parameters": {
        "mode": "passThrough"
      }
    },
    {
      "id": "4",
      "name": "Select Niche",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [700, 300],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Rotate niches in this order: Day 1 Motivational. Day 2 Relationship. Day 3 Mixed. Return only the niche name."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "5",
      "name": "Generate Topic",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [950, 300],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Create one short viral topic for a YouTube Short. Keep it simple and powerful. Target niche: {{$json[\"choices\"][0][\"message\"][\"content\"]}}. Return only the topic."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "6",
      "name": "Generate Hook",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1200, 150],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Write a strong hook under 12 words for this topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}. Make it punchy."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "7",
      "name": "Generate Script",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1200, 300],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Write a 20 to 40 second script. English only. Short sentences. No metaphors. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "8",
      "name": "Generate Title",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1200, 450],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Create a YouTube title under 12 words. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "9",
      "name": "Generate Description",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1450, 150],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Write a short YouTube description under 3 sentences. English only. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "10",
      "name": "Generate Thumbnail Text",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1450, 300],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Create 3 thumbnail texts under 4 words. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "11",
      "name": "Generate TikTok Caption",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1450, 450],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Create one TikTok caption under 10 words. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "12",
      "name": "Generate Hashtags",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [1700, 300],
      "parameters": {
        "operation": "chat",
        "model": "gpt-4.1",
        "messages": [
          {
            "role": "system",
            "content": "Create 10 hashtags in one line separated by spaces. Topic: {{$json[\"choices\"][0][\"message\"][\"content\"]}}."
          }
        ]
      },
      "credentials": {
        "openAiApi": "OpenAI Account"
      }
    },
    {
      "id": "13",
      "name": "Save to Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 1,
      "position": [1950, 300],
      "parameters": {
        "operation": "append",
        "sheetId": "1T3ERDmMk2ISN07OP8SK1EqXr5c6EpHnLBeuwLm1FKVs",
        "range": "Content!A:K"
      },
      "credentials": {
        "googleApi": "Google Sheets"
      }
    }
  ],
  "connections": {
    "Manual Trigger": {
      "main": [["Combine Triggers"]]
    },
    "Daily Trigger": {
      "main": [["Combine Triggers"]]
    },
    "Combine Triggers": {
      "main": [["Select Niche"]]
    },
    "Select Niche": {
      "main": [["Generate Topic"]]
    },
    "Generate Topic": {
      "main": [["Generate Hook", "Generate Script", "Generate Title", "Generate Description", "Generate Thumbnail Text", "Generate TikTok Caption", "Generate Hashtags"]]
    },
    "Generate Hashtags": {
      "main": [["Save to Google Sheets"]]
    }
  }
}
