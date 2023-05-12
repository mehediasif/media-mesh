Media Mesh
IS a Social Networking app Focused on the Human Centered Design Principle.. 

### Key Features
<ul>
  <li>New User Registration</li>
  <li>User Sign IN / Sign Out</li>
  <li>Authentication Middleware for existing user</li>
  <li>Password Reset (Nodemailer)</li>
  <li>Post Feature</li>
  <ol>
  <li>Post Interface & Model Schema</li>
  <li>CRUD schema & API for POST </li>
  <li>Every Post is handled by SocketIO</li>
  <li>Every Post is saved on redis Cache</li>
  <li>Image Controller For post</li>
  <li>Post reaction feature (like Facebook)</li>
  <li>Every Post can have comments</li>
  </ol>
  <li>User Interactions</li>
  <ol>
  <li>Feature to follow/unfollow a user</li>
  <li>Feature to block/unblock a user</li>
  <li>Every Post is handled by SocketIO</li>
  </ol>
</ul>

#### Technical Development Requirements for the backend

<ul>
  <li>React</li>
  <li>Redux-toolkit</li>
  <li>NodeJS</li>
  <li>Typescript for backend</li>
  <li>JavaScript for frontend</li>
  <li>Redis</li>
  <li>Database: MongoDB</li>
  <li>Database ORM: Mongoose</li>
  <li>Message queues</li>
  <li>SocketIO</li>
  <li>Testing: Jest for unit test</li>
  <li>Cloudinary for image and video upload</li>
  <li>Nodemailer and Sendgrid mail</li>
</ul>

#### Infrastructure Setup and Deployment Requirements:
<ol>
  <li>Infrastructure as Code : Terraform</li>
  <li>Cloud Platform: AWS</li>
  <li>Ci pipeline: CircleCI</li>
</ol>

##### Various AWS resources I am planning to use
- VPC and subnets
- Internet gateways
- Route tables
- NAT gateways and elastic ips
- Security groups
- Load balancers
- Autoscaling groups
- EC2 instances
- Route53
- S3 buckets
- Deploying code to AWS amplyfi
- Elasticache for redis clusters






