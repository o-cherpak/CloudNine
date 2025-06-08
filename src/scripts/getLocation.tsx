

export function getLocation(): Promise<{ lat: number; lon: number } | undefined> {

  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        (err) => reject(new Error(err.message))
      );
    }
  });
}
