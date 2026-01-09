Visitor
  │
  ├──> Register
  │        │
  │        └──> Login
  │                  │
  │                  ├── User → User Dashboard → Edit Profile
  │                  │
  │                  └── Admin → Admin Dashboard → Manage Users
  │
  └──> Login
           │
           └──> (User / Admin)

| Page            | User      | Admin          |
| --------------- | --------- | -------------- |
| Login           | ✔️        | ✔️             |
| Register        | ✔️        | ✔️             |
| User Dashboard  | ✔️        | ✔️             |
| Admin Dashboard | ❌         | ✔️             |
| Edit Profile    | ✔️ (self) | ✔️ (self only) |
