export function replaceSearchTerm(payload: string) {
  return { type: 'REPLACE_SEARCH_TERM', payload };
}

export function replaceImageList(payload: any[]) {
  return { type: 'REPLACE_IMAGE_LIST', payload };
}

// Create Load More Functionality for this
export function addPageToImageList(payload: any[]) {
  return { type: 'ADD_PAGE_TO_IMAGE_LIST', payload };
}