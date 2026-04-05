# Entity Relationship Diagram (ERD)

## Database Schema Overview

This document describes the planned database structure for Shof TV.

### Current Status
The application is currently frontend-only. Backend database integration is planned for future releases.

## Planned Entities

### Users
```
User
├── id (UUID, Primary Key)
├── email (String, Unique)
├── username (String, Unique)
├── password_hash (String)
├── first_name (String)
├── last_name (String)
├── avatar_url (String, Optional)
├── role (Enum: admin, user, moderator)
├── status (Enum: active, inactive, suspended)
├── created_at (Timestamp)
├── updated_at (Timestamp)
└── deleted_at (Timestamp, Soft Delete)
```

### Subscriptions
```
Subscription
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key → User)
├── plan_type (Enum: free, basic, premium, enterprise)
├── status (Enum: active, cancelled, expired)
├── start_date (Date)
├── end_date (Date)
├── auto_renew (Boolean)
├── created_at (Timestamp)
└── updated_at (Timestamp)
```

### Content
```
Content
├── id (UUID, Primary Key)
├── title (String)
├── description (Text)
├── category (String)
├── thumbnail_url (String)
├── content_url (String)
├── duration (Integer, seconds)
├── views_count (Integer)
├── rating (Decimal)
├── status (Enum: draft, published, archived)
├── created_by (UUID, Foreign Key → User)
├── created_at (Timestamp)
├── updated_at (Timestamp)
└── deleted_at (Timestamp, Soft Delete)
```

### Favorites
```
Favorite
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key → User)
├── content_id (UUID, Foreign Key → Content)
├── created_at (Timestamp)
└── Unique Constraint: (user_id, content_id)
```

### Watchlist
```
Watchlist
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key → User)
├── content_id (UUID, Foreign Key → Content)
├── progress (Integer, percentage)
├── last_watched (Timestamp)
├── created_at (Timestamp)
└── updated_at (Timestamp)
```

### Comments
```
Comment
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key → User)
├── content_id (UUID, Foreign Key → Content)
├── text (Text)
├── rating (Integer, 1-5)
├── status (Enum: pending, approved, rejected)
├── created_at (Timestamp)
├── updated_at (Timestamp)
└── deleted_at (Timestamp, Soft Delete)
```

### Analytics
```
Analytics
├── id (UUID, Primary Key)
├── user_id (UUID, Foreign Key → User)
├── content_id (UUID, Foreign Key → Content)
├── event_type (Enum: view, click, share, download)
├── duration_watched (Integer, seconds)
├── device_type (String)
├── browser (String)
├── ip_address (String, Hashed)
├── created_at (Timestamp)
```

## Relationships

```
User (1) ──→ (Many) Subscription
User (1) ──→ (Many) Content (created_by)
User (1) ──→ (Many) Favorite
User (1) ──→ (Many) Watchlist
User (1) ──→ (Many) Comment
User (1) ──→ (Many) Analytics

Content (1) ──→ (Many) Favorite
Content (1) ──→ (Many) Watchlist
Content (1) ──→ (Many) Comment
Content (1) ──→ (Many) Analytics
```

## Indexes

### Performance Indexes
- `users.email` - For login queries
- `users.username` - For profile lookups
- `content.category` - For filtering
- `content.created_at` - For sorting
- `favorites.user_id` - For user favorites
- `watchlist.user_id` - For user watchlist
- `analytics.created_at` - For time-based queries
- `analytics.user_id` - For user analytics

## Future Enhancements

- Notifications table
- Recommendations table
- Payment transactions table
- User preferences table
- Content metadata table
- Audit logs table
