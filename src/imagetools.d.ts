// For direct metadata/URL output queries (e.g., import img from './pic.jpg?jsx' or '?url')
declare module "*?jsx" {
  const value: any;
  export default value;
}

// For single format queries where you expect a string URL back
declare module "*?format=webp" {
  const value: string;
  export default value;
}
declare module "*?format=avif" {
  const value: string;
  export default value;
}

// For multi-size resizing or complex stringing
// TIP: Always keep the 'format' or a designated 'anchor parameter' at the very end of your import string
declare module "*&format=webp" {
  const value: string;
  export default value;
}

declare module "*&format=avif" {
  const value: string;
  export default value;
}

// For broad fallback matching if you mix multiple query styles
declare module "*?*" {
  const value: any;
  export default value;
}
