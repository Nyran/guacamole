###############################################################################
# determine source files
###############################################################################
FILE(GLOB         GUACAMOLE_CORE_SRC           RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/*.cpp)
FILE(GLOB         GUACAMOLE_RENDERER_SRC       RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/renderer/*.cpp)

IF (NOT GUACAMOLE_GLFW3)
list (REMOVE_ITEM GUACAMOLE_RENDERER_SRC
  gua/renderer/GlfwWindow.cpp
)
ENDIF (NOT GUACAMOLE_GLFW3)

FILE(GLOB_RECURSE GUACAMOLE_RENDERER_VIDEO_SRC RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/renderer/video3d_geometry/*.cpp)

FILE(GLOB_RECURSE GUACAMOLE_SCENEGRAPH_SRC     RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/scenegraph/*.cpp)
FILE(GLOB_RECURSE GUACAMOLE_NODE_SRC     RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/node/*.cpp)

FILE(GLOB_RECURSE GUACAMOLE_UTILS_SRC          RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/utils/*.cpp)

IF (GUACAMOLE_ENABLE_PHYSICS)
  FILE(GLOB_RECURSE GUACAMOLE_PHYSICS_SRC        RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/physics/*.cpp)
ENDIF (GUACAMOLE_ENABLE_PHYSICS)

FILE(GLOB_RECURSE GUACAMOLE_MATH_SRC           RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/math/*.cpp)

FILE(GLOB_RECURSE GUACAMOLE_EVENTS_SRC         RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/events/*.cpp)
FILE(GLOB_RECURSE GUACAMOLE_DATABASES_SRC      RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} gua/databases/*.cpp)

###############################################################################
# determine header files
###############################################################################
FILE(GLOB         GUACAMOLE_CORE_INC           RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/*.hpp)
FILE(GLOB         GUACAMOLE_RENDERER_INC       RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/renderer/*.hpp)
IF (NOT GUACAMOLE_PBR_SUPPORT)
list (REMOVE_ITEM GUACAMOLE_RENDERER_INC
  ../include/gua/renderer/PLODLoader.hpp
  ../include/gua/renderer/PLODRessource.hpp
  ../include/gua/renderer/PBRLoader.hpp
  ../include/gua/renderer/PBRRessource.hpp
)
ENDIF (NOT GUACAMOLE_PBR_SUPPORT)
IF (NOT GUACAMOLE_GLFW3)
list (REMOVE_ITEM GUACAMOLE_RENDERER_INC
  ../include/gua/renderer/GlfwWindow.hpp
  )
ENDIF (NOT GUACAMOLE_GLFW3)

FILE(GLOB_RECURSE GUACAMOLE_RENDERER_VIDEO_INC RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/renderer/video3d_geometry/*.hpp)

FILE(GLOB_RECURSE GUACAMOLE_SCENEGRAPH_INC     RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/scenegraph/*.hpp)
FILE(GLOB_RECURSE GUACAMOLE_NODE_INC     RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/node/*.hpp)
IF (NOT GUACAMOLE_PBR_SUPPORT)
list (REMOVE_ITEM GUACAMOLE_NODE_INC
  ../include/gua/node/PBRNode.hpp
  ../include/gua/node/PLODNode.hpp
)
ENDIF (NOT GUACAMOLE_PBR_SUPPORT)
FILE(GLOB_RECURSE GUACAMOLE_UTILS_INC          RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/utils/*.hpp)

IF (GUACAMOLE_ENABLE_PHYSICS)
FILE(GLOB_RECURSE GUACAMOLE_PHYSICS_INC        RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/physics/*.hpp)
ENDIF (GUACAMOLE_ENABLE_PHYSICS)


FILE(GLOB_RECURSE GUACAMOLE_MATH_INC           RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/math/*.hpp)
FILE(GLOB_RECURSE GUACAMOLE_GENERATED_INC      RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/generated/*.inl)
FILE(GLOB_RECURSE GUACAMOLE_EVENTS_INC         RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/events/*.hpp)
FILE(GLOB_RECURSE GUACAMOLE_DATABASES_INC      RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../include/gua/databases/*.hpp)

FILE(GLOB_RECURSE GUACAMOLE_SHADERS_GLSL       RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ../resources/shaders/*.frag ../resources/shaders/*.vert ../resources/shaders/*.glsl)

###############################################################################
# assign source and header files to source groups
###############################################################################
SOURCE_GROUP("" FILES ${GUACAMOLE_CORE_INC})
SOURCE_GROUP("" FILES ${GUACAMOLE_CORE_SRC})

SOURCE_GROUP("renderer" FILES ${GUACAMOLE_RENDERER_INC})
SOURCE_GROUP("renderer" FILES ${GUACAMOLE_RENDERER_SRC})

SOURCE_GROUP("renderer\\video3d" FILES ${GUACAMOLE_RENDERER_VIDEO_INC})
SOURCE_GROUP("renderer\\video3d" FILES ${GUACAMOLE_RENDERER_VIDEO_SRC})

SOURCE_GROUP("scenegraph" FILES ${GUACAMOLE_SCENEGRAPH_INC})
SOURCE_GROUP("scenegraph" FILES ${GUACAMOLE_SCENEGRAPH_SRC})

SOURCE_GROUP("node" FILES ${GUACAMOLE_NODE_INC})
SOURCE_GROUP("node" FILES ${GUACAMOLE_NODE_SRC})

SOURCE_GROUP("utils" FILES ${GUACAMOLE_UTILS_INC})
SOURCE_GROUP("utils" FILES ${GUACAMOLE_UTILS_SRC})

IF (GUACAMOLE_ENABLE_PHYSICS)
  SOURCE_GROUP("physics" FILES ${GUACAMOLE_PHYSICS_INC})
  SOURCE_GROUP("physics" FILES ${GUACAMOLE_PHYSICS_SRC})
ENDIF (GUACAMOLE_ENABLE_PHYSICS)

SOURCE_GROUP("math" FILES ${GUACAMOLE_MATH_INC})
SOURCE_GROUP("math" FILES ${GUACAMOLE_MATH_SRC})

SOURCE_GROUP("generated" FILES ${GUACAMOLE_GENERATED_INC})
SOURCE_GROUP("generated" FILES ${GUACAMOLE_GENERATED_SRC})

SOURCE_GROUP("events" FILES ${GUACAMOLE_EVENTS_INC})
SOURCE_GROUP("events" FILES ${GUACAMOLE_EVENTS_SRC})

SOURCE_GROUP("databases" FILES ${GUACAMOLE_DATABASES_INC})
SOURCE_GROUP("databases" FILES ${GUACAMOLE_DATABASES_SRC})

SOURCE_GROUP("resources" FILES ${GUACAMOLE_SHADERS_GLSL})

LINK_DIRECTORIES(${LIB_PATHS})

INCLUDE_DIRECTORIES(guacamole ${INCLUDE_PATHS})

ADD_LIBRARY( guacamole SHARED
    ${GUACAMOLE_CORE_INC}
    ${GUACAMOLE_CORE_SRC}
    ${GUACAMOLE_RENDERER_INC}
    ${GUACAMOLE_RENDERER_SRC}
    ${GUACAMOLE_RENDERER_VIDEO_INC}
    ${GUACAMOLE_RENDERER_VIDEO_SRC}
    ${GUACAMOLE_SCENEGRAPH_INC}
    ${GUACAMOLE_SCENEGRAPH_SRC}
    ${GUACAMOLE_NODE_INC}
    ${GUACAMOLE_NODE_SRC}
    ${GUACAMOLE_UTILS_INC}
    ${GUACAMOLE_UTILS_SRC}
    ${GUACAMOLE_PHYSICS_INC}
    ${GUACAMOLE_PHYSICS_SRC}
    ${GUACAMOLE_MATH_INC}
    ${GUACAMOLE_MATH_SRC}
    ${GUACAMOLE_GENERATED_INC}
    ${GUACAMOLE_GENERATED_SRC}
    ${GUACAMOLE_EVENTS_INC}
    ${GUACAMOLE_EVENTS_SRC}
    ${GUACAMOLE_DATABASES_INC}
    ${GUACAMOLE_DATABASES_SRC}
    ${GUACAMOLE_SHADERS_GLSL}
)


IF (MSVC)
    GET_WIN32_WINNT(WIN_VERSION)
    SET_TARGET_PROPERTIES(guacamole PROPERTIES COMPILE_FLAGS "-D GUA_LIBRARY")
ENDIF(MSVC)

TARGET_LINK_LIBRARIES( guacamole 
                       general ${GL_LIBRARIES}
                       optimized ${SCHISM_CORE_LIBRARY} debug ${SCHISM_CORE_LIBRARY_DEBUG}
                       optimized ${SCHISM_GL_CORE_LIBRARY} debug ${SCHISM_GL_CORE_LIBRARY_DEBUG}
                       optimized ${SCHISM_GL_UTIL_LIBRARY} debug ${SCHISM_GL_UTIL_LIBRARY_DEBUG}
                       optimized ${SCHISM_INPUT_LIBRARY} debug ${SCHISM_INPUT_LIBRARY_DEBUG})

# link static libraries,
IF (MSVC)
  TARGET_LINK_LIBRARIES( guacamole debug ${ASSIMP_LIBRARY_DEBUG} optimized ${ASSIMP_LIBRARY_RELEASE})
ELSEIF (UNIX)
  TARGET_LINK_LIBRARIES( guacamole general -lpthread -ldl)
  TARGET_LINK_LIBRARIES( guacamole general ${GL_LIBRARIES})
  TARGET_LINK_LIBRARIES( guacamole general ${ASSIMP_LIBRARIES})
ENDIF (MSVC)

if (GUACAMOLE_GLFW3)
  TARGET_LINK_LIBRARIES( guacamole general ${GLFW_LIBRARIES})
endif (GUACAMOLE_GLFW3)

IF (GUACAMOLE_PBR_SUPPORT)
  TARGET_LINK_LIBRARIES( guacamole general ${PBR_LIBRARIES})
ENDIF (GUACAMOLE_PBR_SUPPORT)

IF (UNIX)
  TARGET_LINK_LIBRARIES( guacamole general ${Boost_LIBRARIES})
  TARGET_LINK_LIBRARIES( guacamole general ${X11_LIBRARIES})
ELSEIF (MSVC)
  TARGET_LINK_LIBRARIES( guacamole 
                         optimized ${Boost_FILESYSTEM_LIBRARY_RELEASE} debug ${Boost_FILESYSTEM_LIBRARY_DEBUG}
                         optimized ${Boost_SYSTEM_LIBRARY_RELEASE} debug ${Boost_SYSTEM_LIBRARY_DEBUG}
                         optimized ${Boost_REGEX_LIBRARY_RELEASE} debug ${Boost_REGEX_LIBRARY_DEBUG}
                         optimized ${Boost_CHRONO_LIBRARY_RELEASE} debug ${Boost_CHRONO_LIBRARY_DEBUG}
                         optimized ${FREEIMAGE_LIBRARY} debug ${FREEIMAGE_LIBRARY_DEBUG}
                         optimized ${FREEIMAGE_PLUS_LIBRARY} debug ${FREEIMAGE_PLUS_LIBRARY_DEBUG}
                         )
ENDIF (UNIX)

# link general libraries
TARGET_LINK_LIBRARIES( guacamole optimized ${ZMQ_LIBRARY} debug ${ZMQ_LIBRARY_DEBUG})
IF (GUACAMOLE_PBR_SUPPORT)
  TARGET_LINK_LIBRARIES( guacamole general ${PROTOBUF_LIBRARIES})
ENDIF (GUACAMOLE_PBR_SUPPORT)

IF (GUACAMOLE_FBX)
  TARGET_LINK_LIBRARIES( guacamole optimized ${FBX_LIBRARY} debug ${FBX_LIBRARY_DEBUG})
ENDIF (GUACAMOLE_FBX)

# link release libraries
TARGET_LINK_LIBRARIES( guacamole optimized ${JSON_LIBRARY} debug ${JSON_LIBRARY_DEBUG})
IF (GUACAMOLE_ENABLE_PHYSICS)
  TARGET_LINK_LIBRARIES( guacamole 
                         optimized ${BULLET_DYNAMICS_LIBRARY} debug ${BULLET_DYNAMICS_LIBRARY_DEBUG}
                         optimized ${BULLET_COLLISION_LIBRARY} debug ${BULLET_COLLISION_LIBRARY_DEBUG}
                         optimized ${BULLET_MATH_LIBRARY} debug ${BULLET_MATH_LIBRARY_DEBUG} 
                         optimized ${BULLET_HACD_LIBRARY} debug ${BULLET_HACD_LIBRARY_DEBUG} 
                         optimized ${BULLET_MATH_LIBRARY} debug ${BULLET_MATH_LIBRARY_DEBUG} 
                         optimized ${BULLET_SOFTBODY_LIBRARY} debug ${BULLET_SOFTBODY_LIBRARY_DEBUG} 
                       )
ENDIF (GUACAMOLE_ENABLE_PHYSICS)

# set dependencies
IF (NOT ${GUACAMOLE_RUNTIME_PROGRAM_COMPILATION})
  ADD_DEPENDENCIES(guacamole guarc CompileResources)
ENDIF (NOT ${GUACAMOLE_RUNTIME_PROGRAM_COMPILATION})

IF (GUACAMOLE_ENABLE_NVIDIA_3D_VISION)
  IF (UNIX)
    add_dependencies(guacamole nvstusb)
    TARGET_LINK_LIBRARIES( guacamole general ${PROJECT_SOURCE_DIR}/lib/libnvstusb.so)
  ELSEIF(MSVC)
  ENDIF()
ENDIF(GUACAMOLE_ENABLE_NVIDIA_3D_VISION)

###############################################################################
# install
###############################################################################

IF (MSVC)
  install (TARGETS guacamole
    CONFIGURATIONS Release
    RUNTIME DESTINATION bin/Release
    LIBRARY DESTINATION lib/Release
    ARCHIVE DESTINATION lib/Release
  )

  install (TARGETS guacamole
    CONFIGURATIONS Debug
    RUNTIME DESTINATION bin/Debug
    LIBRARY DESTINATION lib/Debug
    ARCHIVE DESTINATION lib/Debug
  )
ELSEIF (UNIX)
  install (TARGETS guacamole
    RUNTIME DESTINATION lib
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
  )
ENDIF (MSVC)

# header files
install(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../include/gua/ DESTINATION include/gua FILES_MATCHING PATTERN "*.hpp")

# shader and material resources
install(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../resources/ DESTINATION resources
        FILES_MATCHING
        PATTERN "*.frag"
        PATTERN "*.vert"
        PATTERN "*.geom"
        PATTERN "*.glsl"
        PATTERN "*.gmd"
        PATTERN "*.obj"
        )
