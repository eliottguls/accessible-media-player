export function convertSrtToVtt(srtContent: string): string {
  // Add VTT header
  let vtt = 'WEBVTT\n\n';
  
  // Replace SRT timestamps:
  // Handles both HH:MM:SS,mmm and MM:SS,mmm formats
  // Converts comma to period: 00:01:30,500 -> 00:01:30.500
  const withFixedTimestamps = srtContent.replaceAll(/(\d{1,2}):(\d{2}):(\d{2}),(\d{3})/g, '$1:$2:$3.$4');
  
  // Remove sequence numbers (lines with only numbers)
  const lines = withFixedTimestamps.split('\n');
  const filteredLines = lines.filter((line, index) => {
    // Keep empty lines and lines that aren't just numbers
    return line.trim() === '' || Number.isNaN(Number(line.trim()));
  });
  
  vtt += filteredLines.join('\n');
  
  return vtt;
}

export function parseTime(timeString: string): number {
  const parts = timeString.split(':').map(Number);
  // Format HH:MM:SS
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  // Format MM:SS (au cas où)
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}