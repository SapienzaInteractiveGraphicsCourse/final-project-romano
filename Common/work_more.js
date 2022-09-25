////////app stuff

mouse controls
				/*
				const controls = new OrbitControls( camera, renderer.domElement );
				//const controls = new FirstPersonControls( camera, renderer.domElement );
				controls.movementSpeed = 150;
				controls.lookSpeed = 0.100;
				controls.lookVertical = true;
				
				controls.enablePan = false;
				controls.enableZoom = false;
				controls.target.set( 0, 1, 0);
				controls.update()
				
				*/
				
				
				/*
			    if(mouseX>0 && mouseY>0){
					camera.position.x= model.position.x+r*Math.sin(model.rotation.y);
				    camera.position.z= model.position.z+r*Math.cos(model.rotation.y);
				}
				else if(mouseX>0 && mouseY<0){
					camera.position.x= model.position.x+r*Math.sin(model.rotation.y);
				    camera.position.z= model.position.z+r*Math.cos(model.rotation.y);
				}
				else if(mouseX<0 && mouseY>0){
					camera.position.x= model.position.x+r*Math.sin(model.rotation.y);
				    camera.position.z= model.position.z+r*Math.cos(model.rotation.y);
				}
				else if(mouseX<0 && mouseY<0){
					camera.position.x= model.position.x+r*Math.sin(model.rotation.y);
				    camera.position.z= model.position.z+r*Math.cos(model.rotation.y);
				}
				*/

				/*
				console.log(
				x_bot_walk.model.position.x+0.1*(Math.cos(x_bot_walk.parts.left_shoulder.rotation.y)+Math.cos(x_bot_walk.parts.left_arm.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y)
				+Math.cos(x_bot_walk.parts.left_arm.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y+x_bot_walk.parts.left_fore_arm.rotation.y)),
				x_bot_walk.model.position.y+0.1*(Math.sin(x_bot_walk.parts.left_shoulder.rotation.x)+Math.sin(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x)
				+Math.sin(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_fore_arm.rotation.x)),
				x_bot_walk.model.position.z+0.1*(Math.cos(x_bot_walk.parts.left_shoulder.rotation.x)+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x)
				+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_fore_arm.rotation.x))
				)
				*/
				//console.log(x_bot_walk.parts.left_arm.position)
				
				/*
				torch.position.set(
				x_bot_walk.model.position.x+0.1*(Math.cos(x_bot_walk.parts.left_shoulder.rotation.y)+Math.cos(x_bot_walk.parts.left_arm.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y)
				+Math.cos(x_bot_walk.parts.left_arm.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y+x_bot_walk.parts.left_fore_arm.rotation.y)),
				x_bot_walk.model.position.y+0.1*(Math.cos(x_bot_walk.parts.left_shoulder.rotation.x)+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x)
				+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_fore_arm.rotation.x))+0.5,
				x_bot_walk.model.position.z-0.5*(Math.cos(x_bot_walk.parts.left_shoulder.rotation.x)+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x)
				+Math.cos(x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_fore_arm.rotation.x))+1.5
				)
				torch.rotation.set(
				x_bot_walk.parts.left_hand.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_arm.rotation.x,
				x_bot_walk.model.rotation.y+x_bot_walk.parts.left_hand.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y+x_bot_walk.parts.left_arm.rotation.y,
				x_bot_walk.parts.left_hand.rotation.z+x_bot_walk.parts.left_shoulder.rotation.z+x_bot_walk.parts.left_arm.rotation.z
				)
				*/
				
				
				/*
				rho=0.1*Math.sqrt(x_bot_walk.parts.left_hand.position.x*0.1*x_bot_walk.parts.left_hand.position.x*0.1+
				x_bot_walk.parts.left_hand.position.y*0.01*x_bot_walk.parts.left_hand.position.y+x_bot_walk.parts.left_hand.position.z*0.01*x_bot_walk.parts.left_hand.position.y)
				arm_rotx=x_bot_walk.parts.left_hand.rotation.x+x_bot_walk.parts.left_shoulder.rotation.x+x_bot_walk.parts.left_arm.rotation.x+x_bot_walk.parts.spine.rotation.x+;
				arm_roty=x_bot_walk.model.rotation.y+x_bot_walk.parts.left_hand.rotation.y+x_bot_walk.parts.left_shoulder.rotation.y+x_bot_walk.parts.left_arm.rotation.y
				
				*/
				
				//arm_rotx=x_bot_walk.model.rotation.x+x_bot_walk.parts.left_hand.rotation.x
				//arm_roty=x_bot_walk.model.rotation.y+x_bot_walk.parts.left_hand.rotation.y
				//console.log(x_bot_walk.parts.hips.position,x_bot_walk.model.rotation.y,x_bot_walk.parts.left_hand.rotation.x,x_bot_walk.parts.left_shoulder.rotation.x,x_bot_walk.parts.left_arm.rotation.x,x_bot_walk.parts.left_fore_arm.rotation.x)
				
				/*
				var _arm1=get_quaternions_multiplication(x_bot_walk.parts.hips.quaternion,x_bot_walk.parts.spine.quaternion);
				var _arm2=get_quaternions_multiplication(_arm1,x_bot_walk.parts.spine_1.quaternion);
				var _arm3=get_quaternions_multiplication(_arm2,x_bot_walk.parts.spine_2.quaternion);
				var _arm4=get_quaternions_multiplication(_arm3,x_bot_walk.parts.left_shoulder.quaternion);
				var _arm5=get_quaternions_multiplication(_arm4,x_bot_walk.parts.left_arm.quaternion);
				var _arm6=get_quaternions_multiplication(_arm5,x_bot_walk.parts.left_fore_arm.quaternion);
				
				var _arm1=get_quaternions_multiplication(x_bot_walk.parts.left_arm.quaternion,x_bot_walk.parts.left_shoulder.quaternion);
				var _arm2=get_quaternions_multiplication(_arm1,x_bot_walk.parts.left_fore_arm.quaternion);
				
				
				console.log(_arm2, new THREE.Quaternion(_arm2.x,_arm2.y,_arm2.z,_arm2.w).angleTo(x_bot_walk.parts.left_shoulder.quaternion));
				*/
				
				
						function update_positions() {
		//console.log(x_bot_walk.parts.armature.position , x_bot_walk.model.position, x_bot_walk.parts.armature.position + x_bot_walk.model.position)	
		/*
		x_bot_walk.parts.armature.position += x_bot_walk.model.position;
        x_bot_walk.parts.spine_1.position  += x_bot_walk.model.position;
        x_bot_walk.parts.spine_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.neck.position += x_bot_walk.model.position;
        x_bot_walk.parts.head.position += x_bot_walk.model.position;
        x_bot_walk.parts.head_top_end.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_eye.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_eye.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_shoulder.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_arm.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_fore_arm.position += x_bot_walk.model.position;
        */
        
        x_bot_walk.parts.left_hand.position.x += x_bot_walk.model.position.x;
        x_bot_walk.parts.left_hand.position.y += x_bot_walk.model.position.y;
        x_bot_walk.parts.left_hand.position.z += x_bot_walk.model.position.z;
        /*
        x_bot_walk.parts.left_hand_thumb_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_thumb_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_thumb_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_thumb_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_index_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_index_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_index_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_index_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_middle_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_middle_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_middle_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_middle_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_ring_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_ring_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_ring_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_ring_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_pinky_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_pinky_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_pinky_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_hand_pinky_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_shoulder.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_arm.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_fore_arm.position += x_bot_walk.model.position;
        */
        
        x_bot_walk.parts.right_hand.position.x += x_bot_walk.model.position.x;
        x_bot_walk.parts.right_hand.position.y += x_bot_walk.model.position.y;
        x_bot_walk.parts.right_hand.position.z += x_bot_walk.model.position.z;
        /*
        x_bot_walk.parts.right_hand_thumb_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_thumb_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_thumb_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_thumb_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_index_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_index_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_index_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_index_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_middle_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_middle_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_middle_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_middle_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_ring_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_ring_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_ring_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_ring_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_pinky_1.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_pinky_2.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_pinky_3.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_hand_pinky_4.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_up_leg.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_leg.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_foot.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_toe_base.position += x_bot_walk.model.position;
        x_bot_walk.parts.left_toe_end.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_up_leg.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_leg.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_foot.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_toe_base.position += x_bot_walk.model.position;
        x_bot_walk.parts.right_toe_end.position += x_bot_walk.model.position;
        */
	}
	
	
	
	   //console.log(torch)		
			/*
		x_bot_walk.parts.armature.position.enabled=true;
		x_bot_walk.parts.hips.position.enabled=true;
        x_bot_walk.parts.spine.position.enabled=true;
        x_bot_walk.parts.spine.position.enabled=true;
        x_bot_walk.parts.spine_2.position.enabled=true;
        x_bot_walk.parts.neck.position.enabled=true;
        x_bot_walk.parts.head.position.enabled=true;
        x_bot_walk.parts.head_top_end.position.enabled=true;
        x_bot_walk.parts.left_eye.position.enabled=true;
        x_bot_walk.parts.right_eye.position.enabled=true;
        x_bot_walk.parts.left_shoulder.position.enabled=true;
        x_bot_walk.parts.left_arm.position.enabled=true;
        x_bot_walk.parts.left_fore_arm.position.enabled=true;
        x_bot_walk.parts.left_hand.position.enabled=true;
        x_bot_walk.parts.left_hand_thumb_1.position.enabled=true;
        x_bot_walk.parts.left_hand_thumb_2.position.enabled=true;
        x_bot_walk.parts.left_hand_thumb_3.position.enabled=true;
        x_bot_walk.parts.left_hand_index_1.position.enabled=true;
        x_bot_walk.parts.left_hand_thumb_4.position.enabled=true;
        x_bot_walk.parts.left_hand_index_3.position.enabled=true;
        x_bot_walk.parts.left_hand_index_4.position.enabled=true;
        x_bot_walk.parts.left_hand_thumb_2.position.enabled=true;
        x_bot_walk.parts.left_hand_middle_1.position.enabled=true;
        x_bot_walk.parts.left_hand_middle_2.position.enabled=true;
        x_bot_walk.parts.left_hand_middle_3.position.enabled=true;
        x_bot_walk.parts.left_hand_middle_4.position.enabled=true;
        x_bot_walk.parts.left_hand_ring_1.position.enabled=true;
        x_bot_walk.parts.left_hand_ring_2.position.enabled=true;
        x_bot_walk.parts.left_hand_ring_3.position.enabled=true;
        x_bot_walk.parts.left_hand_pinky_1.position.enabled=true;
        x_bot_walk.parts.left_hand_pinky_1.position.enabled=true;
        x_bot_walk.parts.left_hand_ring_4.position.enabled=true;
        x_bot_walk.parts.left_hand_pinky_3.position.enabled=true;
        x_bot_walk.parts.left_hand_pinky_4.position.enabled=true;
        x_bot_walk.parts.right_shoulder.position.enabled=true;
        x_bot_walk.parts.right_arm.position.enabled=true;
        x_bot_walk.parts.right_fore_arm.position.enabled=true;
        x_bot_walk.parts.right_hand.position.enabled=true;
        x_bot_walk.parts.right_hand_thumb_1.position.enabled=true;
        x_bot_walk.parts.right_hand_thumb_2.position.enabled=true;
        x_bot_walk.parts.right_hand_thumb_3.position.enabled=true;
        x_bot_walk.parts.right_hand_index_4.position.enabled=true;
        x_bot_walk.parts.right_hand_index_3.position.enabled=true;
        x_bot_walk.parts.right_hand_index_2.position.enabled=true;
        x_bot_walk.parts.right_hand_index_1.position.enabled=true;
        x_bot_walk.parts.right_hand_thumb_4.position.enabled=true;
        x_bot_walk.parts.right_hand_middle_4.position.enabled=true;
        x_bot_walk.parts.right_hand_middle_3.position.enabled=true;
        x_bot_walk.parts.right_hand_middle_2.position.enabled=true;
        x_bot_walk.parts.right_hand_middle_1.position.enabled=true;
        x_bot_walk.parts.right_hand_ring_2.position.enabled=true;
        x_bot_walk.parts.right_hand_ring_1.position.enabled=true;
        x_bot_walk.parts.right_hand_ring_3.position.enabled=true;
        x_bot_walk.parts.right_hand_ring_4.position.enabled=true;
        x_bot_walk.parts.right_hand_pinky_1.position.enabled=true;
        x_bot_walk.parts.right_hand_pinky_2.position.enabled=true;
        x_bot_walk.parts.right_hand_pinky_3.position.enabled=true;
        x_bot_walk.parts.right_hand_pinky_4.position.enabled=true;
        x_bot_walk.parts.left_up_leg.position.enabled=true;
        x_bot_walk.parts.left_leg.position.enabled=true;
        x_bot_walk.parts.left_foot.position.enabled=true;
        x_bot_walk.parts.left_toe_base.position.enabled=true;
        x_bot_walk.parts.left_toe_end.position.enabled=true;
        x_bot_walk.parts.right_up_leg.position.enabled=true;
        x_bot_walk.parts.right_leg.position.enabled=true;
        x_bot_walk.parts.right_foot.position.enabled=true;
        x_bot_walk.parts.right_toe_base.position.enabled=true;
        x_bot_walk.parts.right_toe_end.position.enabled=true;

        
    x_bot_walk.parts.armature.position.x = 0;
    x_bot_walk.parts.armature.position.y = 0;
    x_bot_walk.parts.armature.position.z = 0;
    */

}
