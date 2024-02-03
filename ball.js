class c_ball
            {
                constructor()
                    {
                        this.ball_x=810;
                        this.ball_y=800;
                        this.ball_radius=8;
                        this.ball_color="#fdfbfb";
                        this.ball_movespeed_x =5;
                        this.ball_movespeed_y = 5;
						this.jump_flag=0;
						
						this.bar = new c_bar();
						
                        this.circleSpeed =0;
						this.closestX = 0;
                        this. closestY = 0;
						this. collisionVectorX =0; 
                        this. collisionVectorY =0;
						this.reflectionVectorX = 0;
                        this.reflectionVectorY =0; 
						this.dotProduct =0; 
                        this.reflectionX = 0;
                        this.reflectionY =0; 
                        this.reflectionMagnitude =0; 
					    this.distance =0; 
                    }
                m_drawball(l_context)
                    {
                        
                        l_context.fillStyle=this.ball_color;
                        l_context.beginPath();
                        l_context.arc(this.ball_x,this.ball_y,this.ball_radius,0,2*Math.PI);
                        l_context.closePath();
                        l_context.fill();
						
						this.bar.m_drawbar(l_context);
                    }
				m_ball_canvas_collision(l_canvas)
				{
					if((this.ball_x+this.ball_radius)>l_canvas.width)
                    {
                       this.ball_movespeed_x= -this.ball_movespeed_x;
                       this.ball_x=l_canvas.width-this.ball_radius;
                    }
                    if((this.ball_x-this.ball_radius)<0)
                    {
                       this.ball_movespeed_x= -this.ball_movespeed_x;
                       this.ball_x=this.ball_radius;
                    }
        
                    if((this.ball_y-this.ball_radius)<0)
                    {
                        this.ball_movespeed_y= -this.ball_movespeed_y;
                        this.ball_y=this.ball_radius;
                     }
				}
				m_move_ball()
				{
					if (this.jump_flag==1)
                     {
                        this.ball_x+=this.ball_movespeed_x;
                        this.ball_y+=this.ball_movespeed_y;
                     }
					if (this.jump_flag==0)
                     {
						 if(this.bar.MoveLeft_flag==1)
							 {
                        this.ball_x-=this.bar.movespeed;
							 }
						 if(this.bar.MoveRight_flag==1)
							 {
                        this.ball_x+=this.bar.movespeed;
							 }
                     }
					
				}
				
               m_bar_ball_collision()
				{
                   this.circleSpeed = Math.sqrt(this.ball_movespeed_x * this.ball_movespeed_x  + this.ball_movespeed_y  * this.ball_movespeed_y );

  
  // Calculate the closest point on the rectangle's edge to the circle
                  this.closestX = Math.max(this.bar.bar_X, Math.min(this.ball_x, this.bar.bar_X + this.bar.bar_width));
					
                  this.closestY = Math.max(this.bar.bar_Y, Math.min(this.ball_y, this.bar.bar_Y +this.bar.bar_height));

  // Calculate the vector from the circle's center to the closest point on the rectangle
                  this.collisionVectorX = this.closestX - this.ball_x;
                  this.collisionVectorY = this.closestY - this.ball_y;

  // Calculate the distance from the circle's center to the closest point
                  this.distance = Math.sqrt(this.collisionVectorX * this.collisionVectorX + this.collisionVectorY * this.collisionVectorY);

           if (this.distance < this.ball_radius) 
		   {
    // Calculate the reflection vector
               this. reflectionVectorX = this.collisionVectorX /this.distance;
               this. reflectionVectorY = this.collisionVectorY /this.distance;

    // Calculate the dot product between the circle's velocity and the reflection vector
               this. dotProduct = this.ball_movespeed_x * this.reflectionVectorX + this.ball_movespeed_y * this.reflectionVectorY;

    // Calculate the reflection of the velocity vector
               this.reflectionX = this.ball_movespeed_x - 2 * this.dotProduct * this.reflectionVectorX;
               this.reflectionY = this.ball_movespeed_y - 2 * this.dotProduct * this.reflectionVectorY;

    // Normalize the reflection vector and scale it to the circle's speed
               this.reflectionMagnitude = Math.sqrt(this.reflectionX * this.reflectionX + this.reflectionY * this.reflectionY);
	  
               this.reflectionX = (this.reflectionX / this.reflectionMagnitude) * this.circleSpeed;
               this.reflectionY = (this.reflectionY / this.reflectionMagnitude) * this.circleSpeed;

    // Update the circle's direction components
               this.ball_movespeed_x = this.reflectionX;
               this.ball_movespeed_y = this.reflectionY;

				}
                
              }
			}