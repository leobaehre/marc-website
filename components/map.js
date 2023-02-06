export default function Map() {
  return (
    <div class="">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Oosterstraat%2044&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
      </div>
    </div>
  );
}
