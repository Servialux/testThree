import {ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d-compat'

export function getCanvas() {
    const canvas = document.getElementsByTagName('canvas')[0]
    canvas.width = innerWidth
    canvas.height = innerHeight
    return canvas
}

export function createRigidBodyFixed(mesh, physic) {
    const rigidBodyDesc = RigidBodyDesc.fixed()
    const rigidBody = physic.createRigidBody(rigidBodyDesc)
    createColliderGeo(mesh.geometry, rigidBody, physic)
}

function createColliderBall(radius, rigidBody, physic) {
    const colliderDesc = ColliderDesc.ball(radius)
    return physic.createCollider(colliderDesc, rigidBody)
  }
  
  function createColliderGeo(geo, rigidBody, physic) {
    const vertices = new Float32Array(geo.attributes.position.array)
    const indices = new Float32Array(geo.index.array)
    const colliderDesc = ColliderDesc.trimesh(vertices, indices)
    return physic.createCollider(colliderDesc, rigidBody)
  }
  
export function browse(object, callback) {
    if (object.isMesh) callback(object)
    const children = object.children
    for (let i = 0; i < children.length; i++) {
        browse(children[i], callback)
    }
}