export interface Testimonial {
  id?: string; // Not need to save
  approved?: boolean;
  author: string;
  authorAge: string | number; // string by default
  description: string;
  title: string;
}

export const MOCK_TESTIMONIAL: Testimonial = {
  id: 'USXaSJasdjIIsd',
  approved: true,
  author: 'Anonimus',
  authorAge: '25',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu non. Porta nibh venenatis cras sed felis eget velit. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nisl purus in mollis nunc sed id semper risus in. Aliquam purus sit amet luctus venenatis lectus magna. Senectus et netus et malesuada. Odio pellentesque diam volutpat commodo sed. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Pellentesque diam volutpat commodo sed. Vel pharetra vel turpis nunc.\nPosuere lorem ipsum dolor sit amet consectetur adipiscing elit. Risus quis varius quam quisque id. Velit ut tortor pretium viverra. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Et netus et malesuada fames ac turpis. Tortor id aliquet lectus proin. Bibendum arcu vitae elementum curabitur vitae. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Pulvinar neque laoreet suspendisse interdum consectetur libero.\nQuis vel eros donec ac. Porta nibh venenatis cras sed felis eget. Bibendum est ultricies integer quis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Lectus urna duis convallis convallis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Ornare massa eget egestas purus. Eu turpis egestas pretium aenean pharetra magna. Scelerisque felis imperdiet proin fermentum leo. Quis vel eros donec ac. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Pellentesque pulvinar pellentesque habitant morbi tristique.\nEtiam sit amet nisl purus in. Sagittis orci a scelerisque purus semper. Diam in arcu cursus euismod quis viverra nibh cras. Mattis nunc sed blandit libero volutpat sed. Laoreet sit amet cursus sit amet dictum sit. Maecenas accumsan lacus vel facilisis volutpat est velit. Ac auctor augue mauris augue neque gravida in. Orci dapibus ultrices in iaculis nunc. Ultrices gravida dictum fusce ut placerat. Quis lectus nulla at volutpat.\nQuisque egestas diam in arcu cursus. Nec nam aliquam sem et tortor consequat id porta. Tellus in metus vulputate eu scelerisque felis. Phasellus egestas tellus rutrum tellus pellentesque eu. Ultricies tristique nulla aliquet enim tortor at auctor. Sit amet purus gravida quis blandit turpis cursus in hac. Venenatis lectus magna fringilla urna porttitor rhoncus. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Ultrices gravida dictum fusce ut placerat orci nulla. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Consectetur adipiscing elit duis tristique sollicitudin. Tincidunt augue interdum velit euismod in pellentesque massa. Interdum velit laoreet id donec ultrices. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. In iaculis nunc sed augue lacus viverra vitae congue eu. Consectetur purus ut faucibus pulvinar. Non consectetur a erat nam.',
  title: 'My first testimonial'
};
