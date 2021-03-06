@include "common/header.glsl"

@include "common/gua_camera_uniforms.glsl"


///////////////////////////////////////////////////////////////////////////////
// input
///////////////////////////////////////////////////////////////////////////////
in VertexData {
  vec2 pass_uv_coords;
  //float pass_log_depth;
  float pass_es_linear_depth;
  float pass_es_shift;
  vec3 pass_world_position;
} VertexIn;

///////////////////////////////////////////////////////////////////////////////
// output
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// main
///////////////////////////////////////////////////////////////////////////////
void main() {
  vec2 uv_coords = VertexIn.pass_uv_coords;

  if( dot(uv_coords, uv_coords) > 1)
    discard;

  //clip against global clipping planes
  vec3 gua_world_position = VertexIn.pass_world_position;

  for (int i=0; i < gua_clipping_plane_count; ++i) {

    if (dot(gua_clipping_planes[i].xyz, gua_world_position.xyz) + gua_clipping_planes[i].w < 0) {
      discard;
    }
  }

  gl_FragDepth = (gl_FragCoord.z * gua_clip_far + VertexIn.pass_es_shift) / gua_clip_far;//( ( -(es_linear_depth_corner + es_shift ) ) / gua_clip_far);; // this is used for depth testing/early z in accum pass

}

