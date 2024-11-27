export function validateFile(file: File[]): string | true {
	if (file[0].type !== 'image/png' && file[0].type !== 'image/jpeg') {
		return 'Please select a PNG or JPG file'
	}

	if (file[0].size > 1024 * 1024) {
		return 'File size exceeds the maximum allowed size of 1MB'
	}

	return true
}
