-- Create a function that allows admins to create profiles
CREATE OR REPLACE FUNCTION admin_create_profile(
  p_user_id UUID,
  p_first_name TEXT,
  p_last_name TEXT,
  p_role TEXT,
  p_location TEXT
) RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER -- This makes it run with the privileges of the function creator
AS $$
BEGIN
  INSERT INTO profiles (
    id,
    first_name,
    last_name,
    role,
    location,
    created_at,
    updated_at
  )
  VALUES (
    p_user_id,
    p_first_name,
    p_last_name,
    p_role::text,
    p_location,
    NOW(),
    NOW()
  );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION admin_create_profile TO service_role;
