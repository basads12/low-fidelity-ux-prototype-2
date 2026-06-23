type RemoveObjectInput = {
  imageDataUrl: string;
  maskDataUrl: string;
};

// TODO: Koppel later aan echte AI inpainting API.
export async function removeObjectWithAI(input: RemoveObjectInput): Promise<string> {
  return input.imageDataUrl;
}
