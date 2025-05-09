-- Create a function to create a profile that bypasses RLS
CREATE OR REPLACE FUNCTION create_profile(
  user_id UUID,
  first_name TEXT,
  last_name TEXT,
  user_role TEXT,
  avatar TEXT,
  user_location TEXT
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- This makes it run with the privileges of the function creator
AS $$
DECLARE
  result JSONB;
BEGIN
  -- Insert the profile
  INSERT INTO profiles (
    id,
    first_name,
    last_name,
    role,
    avatar_url,
    location,
    created_at,
    updated_at
  )
  VALUES (
    user_id,
    first_name,
    last_name,
    user_role::text,
    avatar,
    user_location,
    NOW(),
    NOW()
  )
  RETURNING to_jsonb(profiles.*) INTO result;
  
  RETURN result;
END;
$$;
