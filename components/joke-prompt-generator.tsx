/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZQXrszQkfa4
 */
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function JokePromptGenerator() {
  const [theme, setTheme] = useState("");
  const [tone, setTone] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [style, setStyle] = useState("");
  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center space-y-8 text-white"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">AI Joke Prompt Generator</h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          Customize your joke prompt by selecting the theme, tone, and style.
        </p>
      </div>
      <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Theme</h3>
        <Label className="hidden" htmlFor="theme">
          Theme
        </Label>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="animals"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="animals">
              🐾 Animals
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="tech"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="tech">
              💻 Tech
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="sports"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="sports">
              🏀 Sports
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="food"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="food">
              🍔 Food
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="nature"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="nature">
              🌳 Nature
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="science"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="science">
              🔬 Science
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="history"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="history">
              📚 History
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="fantasy"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="fantasy">
              🐉 Fantasy
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="space"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="space">
              🪐 Space
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="music"
              name="theme"
              type="radio"
              onChange={(e) => setTheme(e.target.id)}
            />
            <label className="ml-2" htmlFor="music">
              🎵 Music
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Tone</h3>
        <Label className="hidden" htmlFor="tone">
          Tone
        </Label>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="light-hearted"
              name="tone"
              type="radio"
              onClick={() => setTone("light hearted")}
            />
            <label className="ml-2" htmlFor="light-hearted">
              😄 Light-hearted
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="sarcastic"
              name="tone"
              type="radio"
              onClick={() => setTone("sarcastic")}
            />
            <label className="ml-2" htmlFor="sarcastic">
              🙄 Sarcastic
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="dark-humor"
              name="tone"
              type="radio"
              onClick={() => setTone("dark humor")}
            />
            <label className="ml-2" htmlFor="dark-humor">
              🖤 Dark Humor
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="ironic"
              name="tone"
              type="radio"
              onClick={() => setTone("ironic")}
            />
            <label className="ml-2" htmlFor="ironic">
              🎭 Ironic
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="silly"
              name="tone"
              type="radio"
              onClick={() => setTone("silly")}
            />
            <label className="ml-2" htmlFor="silly">
              🤪 Silly
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="satirical"
              name="tone"
              type="radio"
              onClick={() => setTone("satirical")}
            />
            <label className="ml-2" htmlFor="satirical">
              🎭 Satirical
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="absurd"
              name="tone"
              type="radio"
              onClick={() => setTone("absurd")}
            />
            <label className="ml-2" htmlFor="absurd">
              🤪 Absurd
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Temperature</h3>
        <Label className="hidden" htmlFor="temperature">
          Temperature
        </Label>
        <div className="flex items-center">
          <span>🧊</span>
          <input
            className="w-full mt-2 bg-red-500"
            max="4"
            min="1"
            step="1"
            type="range"
            onChange={(e) => setTemperature(parseInt(e.target.value))}
          />
          <span>🔥</span>
        </div>
      </div>
      <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Style</h3>
        <Label className="hidden" htmlFor="style">
          Style
        </Label>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="one-liner"
              name="style"
              type="radio"
              onChange={(e) => setStyle(e.target.id)}
            />
            <label className="ml-2" htmlFor="one-liner">
              🔥 One-liner
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="story"
              name="style"
              type="radio"
              onChange={(e) => setStyle(e.target.id)}
            />
            <label className="ml-2" htmlFor="story">
              📖 Story
            </label>
          </div>
          <div className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg">
            <input
              id="dialogue"
              name="style"
              type="radio"
              onChange={(e) => setStyle(e.target.id)}
            />
            <label className="ml-2" htmlFor="dialogue">
              💬 Dialogue
            </label>
          </div>
        </div>
        <GenerateJoke
          theme={theme}
          tone={tone}
          temperature={temperature}
          jokeStyle={style}
        ></GenerateJoke>
      </div>
    </div>
  );
}

function GenerateJoke(params: {
  theme: string;
  tone: string;
  temperature: number;
  jokeStyle: string;
}) {
  if (!params.theme || !params.tone || !params.temperature || !params.jokeStyle)
    return <button disabled>Generate Joke Prompt</button>;

  const [prompt, setPrompt] = useState("");

  if (!prompt)
    return (
      <button
        className="border-solid border-2 border-white p-2 rounded-md"
        onClick={() => {
          const calculatedPrompt = calculatePrompt(params);
          setPrompt(calculatedPrompt);
        }}
      >
        Generate Joke Prompt
      </button>
    );

  return (
    <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4 text-center">
      <h3 className="text-xl font-semibold">Generated Joke</h3>
      <Textarea
        className="min-h-[100px]"
        id="joke-output"
        placeholder={prompt}
      />
      <Button
        className="bg-gray-900 text-white mx-auto"
        size="sm"
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText(prompt);
        }}
      >
        Copy to clipboard
      </Button>
      <Button
        className="bg-gray-900 text-white mx-auto"
        size="sm"
        variant="outline"
        onClick={() => {
          setPrompt("");
        }}
      >
        Retry
      </Button>
    </div>
  );
}

function calculatePrompt(params: {
  theme: string;
  tone: string;
  temperature: number;
  jokeStyle: string;
}): string {
  return `Please generate a ${params.jokeStyle} styled joke with the theme ${
    params.theme
  }, with a ${params.tone} tone. Make it ${jokeTemperature(
    params.temperature
  )}. Take a deep breath and let your mind wander. The stage is yours.`;
}

function jokeTemperature(temperature: number) {
  switch (temperature) {
    case 1:
      return "very bad";
    case 2:
      return "flat";
    case 3:
      return "funny";
    case 4:
      return "very funny";
    default:
      return "potato";
  }
}
